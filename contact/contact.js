class Contact {
  getAll;
  static url = "contacts";
  #contacts = [];
  #currrentContact = null;
  #currrentContactE = null;
  #EcontactContainer = null;
  #http = null;
  #editE = null;
  #editname = null;
  #editlastName = null;
  #editphone = null;
  #CLASSES = {
    contactComplete: "contact-complete",
    itemActive: "item-active",
    showEdit: "show-edit",
    hideComplBut: "hide-element",
    close: "close",
    complete: "complete",
    itemTitle: "item-firstname",
    itemBody: "item-lastname",
  };
  constructor(el, editEl) {
    this.#EcontactContainer = el;
    this.#editE = editEl;
    this.#http = new Http(Contact.url);
    this.#EcontactContainer.addEventListener("click", this.onContactClick);
    this.#editE.querySelector(".save").addEventListener("click", this.onSave);
    this.#editname = this.#editE.querySelector(".edit-firstname");
    this.#editlastName = this.#editE.querySelector(".edit-lastname");
    this.#editphone = this.#editE.querySelector(".edit-phone");
    this.getContact();
  }

  getContact() {
    this.#http.getAll().then((d) => {
      this.#contacts = d;
      this.renderContacts(this.#contacts);
    });
  }
  renderContacts(contacts) {
    const content = contacts.map((t) => this.createContactElement(t)).join("");
    this.#EcontactContainer.innerHTML = content;
  }

  createContactElement(contact) {
    return ` <div class="item ${
      contact.isComplete ? this.#CLASSES.contactComplete : ""
    }"  id="${contact.id}">
        <div class="item-content">
            <div>
                <div class="item-firstname" >${contact.name}</div>
                <div class="item-lastname">${contact.lastName}</div>
                <div class="item-phone">${contact.phone}</div>
            </div>
        </div>
        <div class="item-actions">
            <div class="close">x</div>
            <button class="complete ${
              contact.isComplete ? this.#CLASSES.hideComplBut : ""
            }">Finish</button>
        </div>
    </div>`;
  }

  onContactClick = (e) => {
    const target = e.target;
    if (this.#currrentContactE) {
      this.#currrentContactE.classList.remove(this.#CLASSES.itemActive);
    }
    this.#currrentContactE = e.target.closest(".item");
    if (this.#currrentContactE) {
      this.#currrentContact = this.#contacts.find(
        (e) => e.id === this.#currrentContactE.id
      );
    }
    if (e.target.classList.contains(this.#CLASSES.close)) {
      this.removeContact(this.#currrentContact.id);
      return;
    }
    if (e.target.classList.contains(this.#CLASSES.complete)) {
      this.completeContact(this.#currrentContact);
      return;
    }
    if (
      !e.target.classList.contains(this.#CLASSES.itemTitle) ||
      !e.target.classList.contains(this.#CLASSES.itemBody)
    ) {
      this.editContact();
      return;
    }
  };

  removeContact(id) {
    this.#http.delete(id).then((r) => {
      if (r.deletedCount >= 1) {
        this.#contacts = this.#contacts.filter((t) => t.id !== id);
        this.#currrentContactE.remove();
        this.clearData();
      }
    });
  }

  editContact() {
    this.#editE.classList.add(this.#CLASSES.showEdit);
    this.#currrentContactE.classList.add(this.#CLASSES.itemActive);
    this.#editname.value = this.#currrentContact.name;
    this.#editlastName.value = this.#currrentContact.lastName;
    this.#editphone.value = this.#currrentContact.phone;
  }

  completeContact(contact) {
    contact.isComplete = true;
    this.#http.update(contact.id, contact).then((r) => {
      if (r && r.id) {
        this.#currrentContactE.classList.add(this.#CLASSES.contactComplete);
        this.clearData();
      }
    });
  }

  createContact(name, lastName, phone) {
    const contact = {
      name,
      lastName,
      phone,
      isComplete: false,
    };
    this.#http.create(contact).then((r) => {
      if (r && r.id) {
        this.#contacts.unshift(r);
        const content = this.createContactElement(r);
        this.#EcontactContainer.insertAdjacentHTML("afterbegin", content);
      }
    });
  }

  clearData() {
    this.#currrentContact = null;
    this.#currrentContactE = null;
  }
  onSave = () => {
    this.#currrentContact.name = this.#editname.value;
    this.#currrentContact.lastName = this.#editlastName.value;
    this.#currrentContact.phone = this.#editphone.value;
    this.#http
      .update(this.#currrentContact.id, this.#currrentContact)
      .then((r) => {
        if (r && r.id) {
          this.#currrentContactE.querySelector(".item-title").innerHTML =
            r.title;
          this.#currrentContactE.querySelector(".item-body").innerHTML = r.body;
          this.#editE.classList.remove(this.#CLASSES.showEdit);
          this.clearData();
        }
      });
  };
}
