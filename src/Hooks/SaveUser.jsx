
export const saveUser = user => {
     const userInfo = { name: user?.displayName, email: user?.email, }
     console.log(user?.displayName);
     fetch(`https://martial-arts-server-blush.vercel.app/user/${user?.email}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
          .then(data => {
               console.log(data);
          })


}


// instructor role
export const InstructorRole = email => {
     const userInfo = {
          role: 'instructor'
     }

     return fetch(`https://martial-arts-server-blush.vercel.app/user/${email}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}


// admin role
export const AdminRole = email => {
     const userInfo = {
          role: 'Admin'
     }

     return fetch(`https://martial-arts-server-blush.vercel.app/user/${email}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}



// Approve class
export const StatusApprove = id => {
     const userInfo = {
          status: 'approve'
     }

     return fetch(`https://martial-arts-server-blush.vercel.app/addClasses/${id}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}


// deny class
export const StatusDeny = id => {
     const userInfo = {
          status: 'deny'
     }

     return fetch(`https://martial-arts-server-blush.vercel.app/addClasses/${id}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}


// feedBack class
export const StatusFeedback = id => {
     const userInfo = {
          status: 'feedback'
     }

     return fetch(`https://martial-arts-server-blush.vercel.app/addClasses/${id}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}
