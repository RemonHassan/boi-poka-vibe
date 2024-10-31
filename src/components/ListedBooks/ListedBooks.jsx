import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addtoDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const addBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = addBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  return (
    <div>
      <h3 className="text-3xl my-8">Listed</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>books I read:{readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
