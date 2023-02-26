module.exports = class Guest {
  constructor(
    name,
    email,
    stayDuration,
    stayLocation,
    dietaryRestrictions,
    dietaryRestrictionsDescription,
    hasPartyMembers,
    partyMembers
  ) {
    this.name = name;
    this.email = email;
    this.stayDuration = stayDuration;
    this.stayLocation = stayLocation;
    this.dietaryRestrictions = dietaryRestrictions;
    this.dietaryRestrictionsDescription = dietaryRestrictionsDescription;
    this.hasPartyMembers = hasPartyMembers;
    this.partyMembers = partyMembers;
  }

  save() {

  }

  fetchAll() {

  }

  findById(email) {

  }

  edit(email) {
    
  }
}