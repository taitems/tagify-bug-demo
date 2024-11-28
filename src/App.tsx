import { useCallback } from "react";
import "./App.css";
import Tags from "@yaireo/tagify/react"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

const App = () => {
  // on tag add/edit/remove
  //eslint-disable-next-line
  const onChange = useCallback((e: any) => {
    console.log(
      "CHANGED:",
      e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
      e.detail.tagify.getCleanValue(), // Same as above, without the extra properties
      e.detail.value // a string representing the tags
    );
  }, []);

  return (
    <Tags
      whitelist={["item 1", "another item", "item 3"]}
      placeholder="Add some tags"
      settings={{
        blacklist: ["xxx"],
        maxTags: 4,
        dropdown: {
          enabled: 0, // always show suggestions dropdown
        },
      }}
      defaultValue="a,b,c" // initial value
      onChange={onChange}
    />
  );
};
export default App;
