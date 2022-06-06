exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  createTypes(`

     type MdxFrontmatter {
         image: [File] @link(from: "fields.image") 
     }
   `);
};
