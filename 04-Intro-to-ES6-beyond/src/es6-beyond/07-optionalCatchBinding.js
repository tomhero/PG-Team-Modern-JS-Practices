// This is ES10(ES2019) Feature

// normally we do this
try {
  doSomethings()
} catch (exception) {
  console.error("Error : " + exception);
  next()
}

// OK, but if exception will never use any more??
try {
  doSomethingsElse()
  return true
} catch { // <-- now you can omit exception variable here
  return false
}