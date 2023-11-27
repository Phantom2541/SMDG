const abbreviate = (str = "") => {
  if (!str) return "";

  const obj = {
    text: "",
    code: "",
  };

  for (const text of str.split(" ")) {
    if (isNaN(Number(text))) obj.text += text.slice(0, 1);

    obj.code = text;
  }

  return Object.values(obj).join("-");
};

export default abbreviate;
