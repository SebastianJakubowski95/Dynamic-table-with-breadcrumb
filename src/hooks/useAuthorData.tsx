import { useState, useEffect } from "react";

interface newBook {
  title: string;
  description: string;
}

export interface newAuthorData {
  authorName: string;
  kindOfBooks: string[];
  bio: string;
  books: newBook[];
}

const useAuthorData = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [data, setData] = useState<newAuthorData[]>([]);

  const urlAuthors = [
    "https://openlibrary.org/search/authors.json?q=mark%20twain",
    "https://openlibrary.org/search/authors.json?q=charles%20dickens",
    "https://openlibrary.org/search/authors.json?q=george%20eliot",
    "https://openlibrary.org/search/authors.json?q=alexandre%20dumas",
  ];

  const urlKeys = [
    "https://openlibrary.org/authors/OL18319A.json",
    "https://openlibrary.org/authors/OL24638A.json",
    "https://openlibrary.org/authors/OL24528A.json",
    "https://openlibrary.org/authors/OL3745151A.json",
  ];

  const urlWorks = [
    "https://openlibrary.org/authors/OL18319A/works.json",
    "https://openlibrary.org/authors/OL24638A/works.json",
    "https://openlibrary.org/authors/OL24528A/works.json",
    "https://openlibrary.org/authors/OL3745151A/works.json",
  ];

  const allAuthors = [
    "Mark Twain",
    "Charles Dickens",
    "George Eliot",
    "Alexandre Dumas",
  ];

  useEffect(() => {
    const fetchAuthorData = async () => {
      const allData: newAuthorData[] = [];
      for (let i = 0; i < allAuthors.length; i++) {
        const authorName = allAuthors[i];
        const kindOfBooks: string[] = [];
        const books: newBook[] = [];

        // Fetch data from urlAuthors
        let response = await fetch(urlAuthors[i]);
        let data = await response.json();
        if (data.docs && data.docs[0] && data.docs[0].top_subjects) {
          kindOfBooks.push(...data.docs[0].top_subjects.slice(0, 2));
        }

        // Fetch data from urlKeys
        response = await fetch(urlKeys[i]);
        data = await response.json();
        let bio = "";
        if (data.bio) {
          if (typeof data.bio === "string") {
            bio = data.bio;
          } else if (typeof data.bio === "object" && data.bio.value) {
            bio = data.bio.value;
          }
        }

        // Fetch data from urlWorks
        response = await fetch(urlWorks[i]);
        data = await response.json();
        let count = 0;
        for (const entry of data.entries) {
          if (count >= 5) break;
          if (entry.title) {
            const title = entry.title;
            const description = entry.description
              ? entry.description.value
              : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
            books.push({ title, description });
            count++;
          }
        }
        allData.push({ authorName, kindOfBooks, bio, books });
      }
      setData(allData);
      setIsFetching(false);
    };
    fetchAuthorData();
  }, [data, isFetching]);

  return { data, isFetching };
};

export default useAuthorData;
