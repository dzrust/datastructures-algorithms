/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const paths = path.split(/\//gi), pathStack = [];
    for (const path of paths) {
        if (path === "." || path === "") {
            // do nothing
        } else if (path === "..") {
            pathStack.pop();
        } else {
            pathStack.push(path);
        }
    }
    const finalPath = pathStack.join("/");
    return "/" + finalPath;
};

/**
 * 
 * Example 1:

Input: path = "/home/"
Output: "/home"
Explanation:
The trailing slash should be removed.

Example 2:
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation:
Multiple consecutive slashes are replaced by a single one.

Example 3:
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation:
A double period ".." refers to the directory up a level (the parent directory).

Example 4:
Input: path = "/../"
Output: "/"
Explanation:
Going one level up from the root directory is not possible.

Example 5:
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation:
"..." is a valid name for a directory in this problem.
 * 
 * 
 */


console.log(simplifyPath("/home/"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/home/user/Documents/../Pictures"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/.../a/../b/c/../d/./"))
