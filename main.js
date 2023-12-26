// main.js

const userList = document.querySelector('.user-list');
const postInfo = document.querySelector('.post-info');

function makeElement(tag, attr_n, attr_v, content) {
  let output = document.createElement(tag);
  (!!attr_n) && output.setAttribute(attr_n, attr_v);
  output.textContent = content;
  return output;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(data => {
    data.forEach(user => {
      let li = makeElement('li', 'name', user.name, user.name + ' / ' + user.email);

      li.addEventListener('click', () => {
        // Fetch and display posts for the selected user
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then(resp => resp.json())
          .then(posts => {
            // Clear previous posts (if any)
            postInfo.innerHTML = '';

            // Display user information
            let userInfo = makeElement('p', null, null, `User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
            postInfo.appendChild(userInfo);

            // Add an hr element for separation
            postInfo.appendChild(document.createElement('hr'));

            // Display posts
            posts.forEach(post => {
              let postItem = makeElement('li', null, null, post.title);
              postInfo.appendChild(postItem);
            });
          })
          .catch(error => console.error('Error fetching posts:', error));
      });

      userList.append(li);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
