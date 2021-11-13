export const getRefLinksCourses = (link) => {
    let linkSplited = link.split('/');
    return linkSplited[linkSplited.length - 2].split('-')[0]
}