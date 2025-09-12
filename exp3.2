import React, { useState } from "react";

export default function App() {
  const [books, setBooks] = useState([
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Clean Code", author: "Robert C. Martin" },
  ]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Style object
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "30px auto",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    searchBox: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "2px solid #ddd",
      borderRadius: "6px",
      fontSize: "14px",
    },
    form: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "2px solid #ddd",
      borderRadius: "6px",
      fontSize: "14px",
    },
    addButton: {
      padding: "10px 15px",
      background: "#4a90e2",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    bookList: {
      listStyle: "none",
      padding: 0,
    },
    bookItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 10px",
      border: "1px solid #eee",
      borderRadius: "6px",
      marginBottom: "8px",
      background: "#fafafa",
    },
    removeBtn: {
      background: "#e74c3c",
      color: "white",
      border: "none",
      padding: "6px 10px",
      borderRadius: "6px",
      cursor: "pointer",
    },
    empty: {
      textAlign: "center",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Book List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author..."
        style={styles.searchBox}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Book Form */}
      <form onSubmit={addBook} style={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          style={styles.input}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          style={styles.input}
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit" style={styles.addButton}>
          Add
        </button>
      </form>

      {/* Book List */}
      <ul style={styles.bookList}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index} style={styles.bookItem}>
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button
                onClick={() => removeBook(index)}
                style={styles.removeBtn}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p style={styles.empty}>No books found.</p>
        )}
      </ul>
    </div>
  );
}
