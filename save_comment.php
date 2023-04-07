<?php
  // Get the submitted comment from the form
  $comment = $_POST['comment'];

  // Open the Comments.txt file for writing
  $file = fopen("Comments.txt", "a");

  // Write the comment to the file
  fwrite($file, $comment . "\n");

  // Close the file
  fclose($file);

  // Redirect the user back to the comment form
  header("Location: comment_form.html");
?>
