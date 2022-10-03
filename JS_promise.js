const preloader = document.createElement('div');
preloader.innerHTML = `
<div class="loader">loading</div>
`;
document.body.append(preloader);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(5), 5000);
//     setTimeout(() => reject(new Error('Error')), 6000);
// });

// promise
//     .finally(() => preloader.remove)
//     .then(result => {
//         document.write(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(result * 3), 3000)
//             setTimeout(() => reject(new Error('Error2')), 2000)
//         });
//     })
//     .then(result => {
//         document.write(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(result - 3), 2000)
//         });
//     })
//     .then(result => {
//         document.write(result)
//     })
//     .catch(error => document.write(error));

// function getUrl(url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 400){
//                 resolve(xhr.response);
//             }else{
//                 reject(new Error(xhr.statusText));
//             }
//         });
//         xhr.addEventListener('error', () => {
//             reject(new Error('Network error'));
//         });
//         xhr.send();
//     });
// }

// getUrl('https://fakestoreapi.com/products/1')
//     .finally(() => preloader.remove)
//     .then(response => document.write(response))
//     .catch(error => console.log(error));

// const promise_1 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve(5), 5000);
// // }); 
// // const promise_2 = new Promise((resolve, reject) => {
// //     setTimeout(() => reject(9), 3000);
// // });   
// // const promise_3 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve(1), 1000);
// // });      

// // // Promise.all([promise_1, promise_2, promise_3])
// // //     .then(results => {
// // //         results.forEach(el => {
// // //             document.write(el)
// // //         })
// // //     })

// // Promise.race([promise_1, promise_2, promise_3])
// //     .then(res => document.write(res));

// // Promise.resolve(console.log('done'));
// // Promise.reject();

// fetch('https://fakestoreapi.com/products/1')
//     .finally(() => preloader.remove)
//     .then(response => {
//         console.log(response);
//         if(response.status >= 400){
//             throw new Error('Server error')
//         }
//         return response.text()
//     })
//     .then(data => document.write(data))
//     .then(error => {console.log(error)})


async function f(){
    console.log('Начало функции');
    const resp = await fetch('https://fakestoreapi.com/products/1')
    const data = await resp.json();
    console.log(data);
    console.log('Конец функции');    
}    
