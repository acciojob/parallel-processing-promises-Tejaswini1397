//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// btn.addEventListener("click", () => {
//       downloadImages(images)
//         .then((downloadedImages) => {
//           output.innerHTML = ""; // Clear previous images
//           downloadedImages.forEach((image) => {
//             const imgElement = document.createElement("img");
//             imgElement.src = image.url;
//             output.appendChild(imgElement);
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     });

//     function loadImage(image) {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => resolve({ url: image.url });
//         img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
//         img.src = image.url;
//       });
//     }

//     function downloadImages(images) {
//       const promises = images.map(loadImage);
//       return Promise.all(promises);
//     }
// const imgLoad=(url)=>{
// 	return `<img src=${url}/>`;
// }
// const all= async () =>{
// 	try{
// 		const gallary=await Promise.all(images.map((val)=> fetch(val.url)));
// 		gallary.forEach((val)=>{
// 			output.insertAdjacentHTML("beforeend",imgLoad(val.url));
			
// 		})
// 		return gallary;
// 	}catch(error){
// 		 return "failed to load images";
// 	}
	
// }
// btn.addEventListener('click',()=>{
// 	images.forEach((val)=>{
// 		output.insertAdjacentHTML("beforeend",imgLoad(val.url));
// 	})
// });





const imageLoad = (url) => {
  return `<img src='${url}' />`;
};

const all = async () => {
  try {
    const gallery = await Promise.all(images.map((val) => fetch(val.url)));
    gallery.forEach((val) => {
      output.insertAdjacentHTML("beforeend", imageLoad(val.url));
    });

    return gallery;
  } catch (err) {
    return "failed to load images";
  }
};

btn.addEventListener("click", () => {
  images.forEach((val) => {
      output.insertAdjacentHTML("beforeend", imageLoad(val.url));
    });
});