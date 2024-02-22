import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const handleSubmit = (e) => {
    localStorage.setItem("search", e.target[0].value);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      localStorage.removeItem("search");
    }
  };

  return (
    <Form className='form' onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        className='form-input'
        defaultValue={searchTerm}
        onChange={handleChange}
      />
      <button type='submit' className='btn' disabled={isSubmitting}>
        {isSubmitting ? "searching..." : "search"}
      </button>
    </Form>
  );
};

export default SearchForm;
