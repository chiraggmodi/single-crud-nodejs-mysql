function confimrDelete(id) {
    var r = confirm("Are you sure what to delete?");
    if (r == true) {
      window.location.href='/profiles/delete/'+id;
        return;
    } else {
        return false;
    }
}
