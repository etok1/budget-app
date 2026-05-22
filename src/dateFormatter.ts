function dateFormatter() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB");
  return formattedDate;
}
