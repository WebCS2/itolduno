// Source - https://stackoverflow.com/q/20372394
// Posted by Debakant Mohanty, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-12, License - CC BY-SA 3.0

 <script>
    /*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
                alert('not allowed');
            }
            return false;
    };
    </script>
