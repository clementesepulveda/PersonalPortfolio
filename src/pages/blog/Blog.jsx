import { get, getDatabase, ref } from "firebase/database";
import app from "../../firebase";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import FadeInAnimation from "../../components/FadeInAnimation";
import BlogIcon from "../../components/BlogIcon";
import './BlogContent.css';

function Blog() {
  let [blogs, setBlog] = useState([])
  let [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const db = getDatabase(app)
    const dbRef = ref(db, 'blogs');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      let blogData = Object.keys(snapshot.val()).map(key=>{
        return {
          'link': key,
          ...snapshot.val()[key]
        }
      })

      blogData = blogData.sort((a, b) => a.data > b.data ? 1 : -1);
      blogData = blogData.map(v => {
        return {...v, 'description': v['content']}
      })
      setBlog(blogData);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ?
        <div className="flex justify-center p-16">
          <LoadingSpinner />
        </div>
        :
        <div className="grid grid-cols-1 justify-center gap-10 p-8">
          {blogs.map(function (object, i) {
            return (
              <React.Fragment key={i}>
                <FadeInAnimation>
                  <BlogIcon data={object} key={i} />
                </FadeInAnimation>
              </React.Fragment>
            )

          })}
        </div>
      }

    </>
  );
}

export default Blog;
