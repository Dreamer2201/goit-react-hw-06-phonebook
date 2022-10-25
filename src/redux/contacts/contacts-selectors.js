const filterContact = ({ phoneBook }) => {
  const { contacts, filter } = phoneBook;
    const filterNormolaze = filter.toLocaleLowerCase();
    if (!filter) {
      return contacts;
    }

    const filterContacts = contacts.filter(({ name }) => {
      const nameContactNormolaze = name.toLocaleLowerCase();
      const resultFilter = nameContactNormolaze.includes(filterNormolaze);
      return resultFilter;
    })
    return filterContacts;
  }

export default filterContact;
