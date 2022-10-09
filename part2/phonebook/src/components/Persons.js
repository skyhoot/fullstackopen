const Persons = ( {persons, filterName} ) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
        .map((filteredPerson) => {
          return (
            <p key={filteredPerson.name}>
              {filteredPerson.name} {filteredPerson.number}
            </p>
          )
        })
      }
    </div>
  )
}

export default Persons