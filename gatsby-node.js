exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
    let buttons =await createPage({
        path: "/buttons",
        component: require.resolve("./src/templates/buttons.js"),
        context: {},
        defer: true,
    })
    let title = await createPage({
        path: "/titles",
        component: require.resolve("./src/templates/titles.js"),
        context: {},
        defer: true,
    })
    return {buttons, title}
}
