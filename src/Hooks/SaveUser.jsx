
export const saveUser = user => {
     const userInfo = { name: user?.displayName, email: user?.email, }
 console.log(user?.displayName);
     fetch(`http://localhost:5000/user/${user?.email}`, {
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
     
     return fetch(`http://localhost:5000/user/${email}`, {
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
     
     return fetch(`http://localhost:5000/user/${email}`, {
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
     
     return fetch(`http://localhost:5000/addClasses/${id}`, {
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
     
     return fetch(`http://localhost:5000/addClasses/${id}`, {
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
     
     return fetch(`http://localhost:5000/addClasses/${id}`, {
          method: 'PUT',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
     })
          .then(res => res.json())
}
    