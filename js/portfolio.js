$(document).ready(function() {
    // Set button pertama sebagai active
    $('.filter_btn[data-filter="all"]').addClass('active');

    // Handle filter button clicks
    $('.filter_btn').click(function() {
        // Hapus class active dari semua button
        $('.filter_btn').removeClass('active');
        
        // Tambah class active ke button yang diklik
        $(this).addClass('active');
        
        // Ambil kategori dari data-filter
        var filterValue = $(this).attr('data-filter');
        
        if(filterValue == 'all') {
            // Jika 'all', tampilkan semua project
            $('.project_box').fadeIn(300);
        } else {
            // Sembunyikan semua project
            $('.project_box').fadeOut(200);
            // Tampilkan project sesuai kategori
            $('.project_box[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });
}); 