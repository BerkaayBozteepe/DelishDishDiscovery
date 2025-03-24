  document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  
  document.getElementById('recipesButton').addEventListener('click', function() {
    window.location.href = 'recipes.html';
  });
  
  document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = 'about.html';
  });
  
  document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });

  document.getElementById('guideButton').addEventListener('click', function() {
    window.location.href = 'guide.html';
  });

  document.getElementById('authorsButton').addEventListener('click', function() {
    window.location.href = 'authors.html';
  });




  // Sayfa içindeki bölümlere tıklandığında, ilgili bölüme kaydırma (guide.html)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için event koyduk.
      const targetId = link.getAttribute('href').substring(1); // Bağlantıdaki hedef ID yi alıp onu bir değişkene atadık.
      const targetSection = document.getElementById(targetId); // Hedef bölümü ID kullanarak seçmek için değişken atadık.

      // Hedef bölümünü ekranın üstüne getirir. Yani kaydırır. 
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });




  // Contact form js kısmı. (contact.html)
  function validateForm() {
      const emailField = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailValue = emailField.value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
          emailError.textContent = 'Please enter a valid email address.';
          emailError.style.color = 'red';
          return false;
      } else {
          emailError.textContent = '';
          return true;
      }
  }





// Yorumları saklamak için oluşturduğumuz dizi (geçici olarak saklayabiliyoruz tabi ki)
let comments = [];

// Submit Comment butonuna tıklama durumuna göre çalışan bir event listener ekledik.
const submitCommentButton = document.getElementById('submitComment');
submitCommentButton.addEventListener('click', () => {
  const commentInput = document.getElementById('commentInput').value;
  const usernameInput = document.getElementById('usernameInput').value;

  if (commentInput.trim() !== '' && usernameInput.trim() !== '') {
    // Eğer yorum ve kullanıcı adı alanı boş değilse, yani bir mesaj ve kullanıcı adı girilmişse, fonksiyonun if kısmına devam edip bir fullComment oluşturuyoruz kullanıcının girdiği yorum ve kullanıcı adından.
    const fullComment = `${usernameInput}: ${commentInput}`;
    comments.push(fullComment);
    displayComments();
    document.getElementById('commentInput').value = ''; // Yorum görüntülendikten sonraki yorum input alanını temizlemek için yazdığımız kod.
    document.getElementById('usernameInput').value = ''; // Yorum görüntülendikten sonraki yorum kullanıcı adı alanını temizlemek için yazdığımız kod.
  }
});






// Yorumları göstermek için oluşturduğumuz fonksiyon.
function displayComments() {
  const commentsSection = document.getElementById('commentsSection');
  commentsSection.innerHTML = ''; // CommentSection kısmındaki içeriği temizlemek için yazdığımız kod. 

  comments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = comment;
    commentsSection.appendChild(commentDiv);
  });
}



let isFavorited = false;

function addToFavorites(button) {
  const messageSpan = button.nextElementSibling;
  if (!isFavorited) {
    button.classList.add("active");
    messageSpan.innerText = "Recipe has been added to your favorites!";
    messageSpan.style.display = "block";
    isFavorited = true;
  } else {
    button.classList.remove("active");
    messageSpan.innerText = "Recipe has been removed from your favorites!";
    messageSpan.style.display = "block";
    isFavorited = false;
  }

  setTimeout(function() {
    messageSpan.style.display = "none";
  }, 2000);
}