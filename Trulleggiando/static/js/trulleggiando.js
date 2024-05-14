let menuBtn = document.querySelector(".menubutton")
console.log(menuBtn)
		menuBtn.addEventListener('click', function(e){
			e.preventDefault()
			document.querySelector(".naviWrapper").classList.toggle('open')
		})