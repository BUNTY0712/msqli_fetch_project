export async function handleSubmit(pin, wd) {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    withdraw: "",
    //r
    pin: Data[0].userpin,
  });
  e.preventDefault();
  const form = new FormData();
  form.append("withdraw", formData.withdraw);
  //r
  form.append("pin", formData.pin);

  try {
    const response = await fetch(
      "http://localhost/news-site/backend/atmwd.php",
      {
        method: "POST",
        body: form,
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      setUserData(responseData);
      console.log("Product added successfully");
      // Handle the response or perform additional logic
    } else {
      console.error("Failed to add amount");
    }
  } catch (error) {
    console.error("An error occurred while adding the product:", error);
  }
}
