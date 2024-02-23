import { Form, useNavigation } from "react-router-dom";
import { FormEvent, ChangeEvent } from "react";

const SearchForm = ({ searchTerm }: { searchTerm: string }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const handleSubmit = (e: FormEvent) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const searchTerm = formData.get("search") as string;
    localStorage.setItem("search", searchTerm);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
