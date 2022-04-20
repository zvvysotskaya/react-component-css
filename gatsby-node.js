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
    });

    let choice = await createPage({
        path: "/choice",
        component: require.resolve("./src/templates/choice.js"),
        context: {},
        defer: true,
    })
    let flexBox = await createPage({
        path: "/flex-box",
        component: require.resolve("./src/templates/flex-box.js"),
        context: {},
        defer: true,
    })
    
    return { buttons, title, choice, flexBox}
}
