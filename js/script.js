const textarea = $('.textarea')

textarea.on('keyup paste', function() {
  setTimeout(function() {
    let textareaValue = textarea.val()
    let character = $('.character')
    let words = $('.words')
    character.text(textareaValue.length)
    words.text(textareaValue.split(' ').length)
  }, 200)
})

