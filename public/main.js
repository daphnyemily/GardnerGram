 
var likeBtn = document.getElementsByClassName('likeBtn');
var dislikeBtn = document.getElementsByClassName('dislikeBtn');
var trash = document.getElementsByClassName('fa-trash');



Array.from(likeBtn).forEach(function (element) {
	element.addEventListener('click', function () {
		// const likedPostId = this.parentNode.childNodes[2].dataset.id;
		const likedPostId = element.dataset.id
		console.log('likedPostId:', likedPostId)
		const totalLikes = this.parentNode.childNodes[4].innerText;

		fetch('likePost', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				likedPostId: likedPostId,
				totalLikes: totalLikes,
			}),
		})
			.then(response => {
				if (response.ok) return response.json();
			})
			.then(data => {
				console.log(data);
				window.location.reload();
			});
	});
});

// Array.from(dislikeBtn).forEach(function (element) {
// 	element.addEventListener('click', function () {
// 		// const likedPostId = this.parentNode.childNodes[2].dataset.id;
// 		const likedPostId = element.dataset.id
// 		console.log('likedPostId:', likedPostId)
// 		const totalLikes = this.parentNode.childNodes[4].innerText;

// 		fetch('dislikePost', {
// 			method: 'put',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify({
// 				likedPostId: likedPostId,
// 				totalLikes: totalLikes,
// 			}),
// 		})
// 			.then(response => {
// 				if (response.ok) return response.json();
// 			})
// 			.then(data => {
// 				console.log(data);
// 				window.location.reload();
// 			});
// 	});
// });

Array.from(trash).forEach(function (element) {
	element.addEventListener('click', function () {
		const name = this.parentNode.parentNode.childNodes[1].innerText;
		const msg = this.parentNode.parentNode.childNodes[3].innerText;
		fetch('messages', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				msg: msg,
			}),
		}).then(function (response) {
			window.location.reload();
		});
	});
});
