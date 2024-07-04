$(document).ready(function() {
    const validateInput = (title, rating) => {
      if (title.length < 2) {
        alert('Title must be at least 2 characters long.');
        return false;
      }
      if (rating < 0 || rating > 10 || isNaN(rating)) {
        alert('Rating must be a number between 0 and 10.');
        return false;
      }
      return true;
    };
  
    $('#movieForm').submit(function(event) {
      event.preventDefault(); 
      
      const title = $('#title').val();
      const rating = parseFloat($('#rating').val());
      
      if (!validateInput(title, rating)) {
        return;
      }
      
      $('#title').val('');
      $('#rating').val('');
  
      const movieEntry = $(`<div class="movie-item"><strong>Title:</strong> ${title}, <strong>Rating:</strong> ${rating.toFixed(1)}</div>`);
      const removeButton = $('<button class="remove-btn">Remove</button>');
      
      movieEntry.append(removeButton);
      
      $('#moviesList').append(movieEntry);
  
      removeButton.click(function() {
        movieEntry.remove();
      });
  
      sortMovies();
    });
  
    const sortMovies = () => {
      const moviesList = $('#moviesList');
      const movieItems = moviesList.children('.movie-item').toArray();
  
      movieItems.sort((a, b) => {
        const titleA = $(a).find('strong:first').text().toUpperCase();
        const titleB = $(b).find('strong:first').text().toUpperCase();
        const ratingA = parseFloat($(a).find('strong:last').text().trim().split(': ')[1]);
        const ratingB = parseFloat($(b).find('strong:last').text().trim().split(': ')[1]);
  
        if ($('#sortTitle').val() == 'asc') {
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
        } else if ($('#sortTitle').val() == 'desc') {
          if (titleA > titleB) return -1;
          if (titleA < titleB) return 1;
        }
  
        if ($('#sortRating').val() == 'asc') {
          return ratingA - ratingB;
        } else if ($('#sortRating').val() == 'desc') {
          return ratingB - ratingA;
        }
  
        return 0;
      });
  
      moviesList.empty();
      $.each(movieItems, (index, element) => {
        moviesList.append(element);
      });
    };
  
    $('#sortTitle').change(() => {
      sortMovies();
    });
  
    $('#sortRating').change(() => {
      sortMovies();
    });
  });
  