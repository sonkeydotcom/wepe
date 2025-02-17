<script>
function hideBackdrop() {
    let backdrop = document.querySelector('.modal-backdrop'); // Corrected selector
    if (backdrop) {
        backdrop.style.display = 'none'; // Hides the backdrop
    } else {
        console.log("No backdrop found!"); // Debugging message
    }
}
</script>