/*
 *
 * dsInit.js 
 * DataStax init scripts
 * For calling methods that should be run on each page load.
 * Declare the JS source file in the template, then call 
 * the methods from here
 *
 */

function dsInit () {
	highlightSyntax();
    getPopupSection(); 
    createImagePopups();
}

// highlight syntax using highlight.pack.js
function highlightSyntax() {
    $('pre:not(.results)').each(function(i, block) {
      hljs.highlightBlock(block);
    });
}

// Create image popups using magnific-popup.js
function createImagePopups() {
    $('.img-popup').magnificPopup({
        type:'image',
        disableOn: function() {
            var magnificPopup = $.magnificPopup.instance;
            return true;
        }

    });
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });
}

function getPopupSection() {
  // Find all the tags with a filepath-popup class
  var filepaths = document.getElementsByClassName('filepath-popup');
  console.log('Found ' + filepaths.length + ' filepaths.');
  // Find the hidden sections
  var sections = document.getElementsByClassName('mfp-hide');
  console.log('Found mfp-hide sections: ' + sections.length);
  for (var i = 0; i < filepaths.length; ++i) {
    // get the file name minus any punctuation characters & whitespace
    var filepath = filepaths[i].innerHTML.replace(/[^a-zA-Z 0-9]+/g, '').replace(/\s+/g, '');
    console.log('Filepath is: ' + filepath);
    // get all the links with the stripped file name
    var links = document.getElementsByClassName(filepath);
    console.log('Found ' + filepath + ' links: ' + links.length);
    // loop through the hidden sections to find the one that refers to the file name
    for (var j = 0; j < sections.length; ++j) {
      section = sections[j];
      // examine the hidden section's id to see if it contains the stripped file name
      if (section.id.toLowerCase().indexOf(filepath.toLowerCase()) > - 1) {
        console.log('Found section for ' + filepath);
        for (var k = 0; k < links.length; ++k) {
          // update the link to the hidden content to trigger the popup
          links[k].href = '#' + section.id;
          console.log('Updated link to: ' + section.id);
        }
      } else {
        // no hidden sections were found based on the stripped file name
        // this shouldn't happen
        // possibly reasons for it occurring are typos, remnant hidden sections from removed content,
        // or incorrect conkeyrefs being added to the file
        console.log('No section for ' + filepath);
      }
    }
  }
}