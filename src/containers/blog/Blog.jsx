import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based so need the +1
const year = currentDate.getFullYear();

const date= `${month}/${day}/${year}`

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date={date} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date={date} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date={date} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date={date} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date={date} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog