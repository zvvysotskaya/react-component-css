exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
    let buttons =await createPage({
        path: "/buttons",
        component: require.resolve("./src/templates/buttons.js"),
        context: {},
        defer: true,
    })
    return {buttons}
}
