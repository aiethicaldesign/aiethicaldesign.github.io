import React, {useState, useEffect, useContext} from "react";
import "./Ref.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {refSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Refs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (refSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            refSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!refSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="refs">
        <div className="ref-header">
          <h1 className="ref-header-text">{refSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode ref-subtitle" : "subTitle ref-subtitle"
            }
          >
            {refSection.subtitle}
          </p>
        </div>
        <div className="ref-main-div">
          <div className="ref-text-div">
            {refSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? refSection.refs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : mediumBlogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
