function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(item => goodUsers.indexOf(item) !== -1)
  };
}

module.exports = checkUsersValid
