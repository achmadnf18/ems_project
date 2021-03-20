
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Invoices</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">List all invoice</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="button-add-invoice mb-3">
                  <button type="button" class="btn btn-primary" style="font-size: 16px;" onclick="showAddInvoiceModal()">
                    <i class="fa fa-plus nav-icon mr-2"></i>Create New Invoice
                  </button>
                </div>
                <table id="example1" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>Invoice No.</th>
                        <th>Invoice Date</th>
                        <th>Total</th>
                        <th>Is Approve ?</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>Invoice No.</th>
                        <th>Invoice Date</th>
                        <th>Total</th>
                        <th>Is Approve ?</th>
                    </tr>
                </tfoot>
                </table>
              </div>
              <div class="card-body">
                <div class="py-3" style="font-size: 32px; font-weight: bold;">Detail Invoice: <span class="invoice_no"></span></div>
                <div class="button-add-detail mb-3">
                  <button type="button" class="btn btn-primary" style="font-size: 16px;" onclick="showAddDetailModal()">
                    <i class="fa fa-plus nav-icon mr-2"></i>Add Detail
                  </button>
                </div>
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>Invoice No.</th>
                        <th>Invoice Date</th>
                        <th>Vendor Name</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                  </thead>
                  <tfoot>
                      <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>Invoice No.</th>
                        <th>Invoice Date</th>
                        <th>Vendor Name</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  
  <!-- Modal -->
  <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content"  style="width: 600px;">
        <div class="modal-header">
          <h5 class="modal-title" id="detailModalLabel">Detail Invoice</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form class="validate-form" method="POST">
          <div class="modal-body px-4">
            
              <div class="form-group row detailInvoiceId">
                <label for="detailInvoiceId" class="col-sm-4 col-form-label">Detail Invoice ID</label>
                <div class="col-sm-8">
                  <input type="text" readonly class="form-control-plaintext mx-2" id="detailInvoiceId" name="id" value="0">
                </div>
              </div>
              <div class="form-group row">
                <label for="invoiceNo" class="col-sm-4 col-form-label">Invoice No.</label>
                <div class="col-sm-8">
                  <input type="text" readonly class="form-control-plaintext mx-2" id="invoiceNo" name="invoice_no">
                </div>
              </div>
              <div class="form-group row">
                <label for="invoiceDate" class="col-sm-4 col-form-label">Invoice Date</label>
                <div class="col-sm-8">
                  <input type="text" readonly class="form-control-plaintext mx-2" id="invoiceDate" name="invoice_date">
                </div>
              </div>
              <div class="form-group row">
                <label for="itemName" class="col-sm-4 col-form-label">Item Name</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control mx-2" id="itemName" name="item_name">
                </div>
              </div>
              <div class="form-group row">
                <label for="qty" class="col-sm-4 col-form-label">Qty</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control mx-2" id="qty" name="qty">
                </div>
              </div>
              <div class="form-group row">
                <label for="price" class="col-sm-4 col-form-label">Price per Item</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control mx-2" id="price" name="price">
                </div>
              </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary btn-submit">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="addInvoiceModal" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content"  style="width: 600px;">
        <div class="modal-header">
          <h5 class="modal-title" id="detailModalLabel">Invoice</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form class="validate-form" method="POST">
          <div class="modal-body px-4">
            
              <div class="form-group row">
                <label for="invoiceDate2" class="col-sm-4 col-form-label">Invoice Date</label>
                <div class="col-sm-8">
                    <div class="input-group date mx-2" id="invoiceDate2" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" name="invoice_date" data-target="#invoiceDate2"/>
                        <div class="input-group-append" data-target="#invoiceDate2" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="itemName" class="col-sm-4 col-form-label">Item Name</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control mx-2" id="itemName" name="item_name">
                </div>
              </div>
              <div class="form-group row">
                <label for="qty" class="col-sm-4 col-form-label">Qty</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control mx-2" id="qty" name="qty">
                </div>
              </div>
              <div class="form-group row">
                <label for="price" class="col-sm-4 col-form-label">Price per Item</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control mx-2" id="price" name="price">
                </div>
              </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary btn-submit">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->

<script>
  const role = window.location.pathname.split('/')[2];
  let currentInvoice = {};

  const myToast = (text, icon) => {
    $.toast({
        text: "<span class='my-2' style='font-size: 14px;'><b>"+ text +"</b></span>", 
        icon: icon || 'success',
        showHideTransition: 'slide',
        allowToastClose: true,
        hideAfter: 3000,
        stack: false,
        position: 'top-center', 
        textAlign: 'left',
        loader: false,
    });
  }

  $(function () {
    $('.button-add-detail').hide();
    if(role == 'admin'){
      $('.button-add-invoice').remove();
      $('.button-add-detail').remove();
    }
    $('#addInvoiceModal #invoiceDate2').datetimepicker({
      format:'DD/MM/YYYY HH:mm:ss',
      timePicker: true,
    });
    getListInvoice();

    $('#detailModal .validate-form').on('submit',function(e){
      e.preventDefault();
      
      const invoice_id = currentInvoice.id;
      const invoice_no = currentInvoice.invoice_no;

      const data = {
          invoice_id: invoice_id,
          item_name: $('input[name="item_name"]').val(),
          price: $('input[name="price"]').val(),
          qty: $('input[name="qty"]').val(),
      }

      const detailInvoiceId = $('input[name="id"]').val();
      let postUrl = "<?php echo site_url()?>"+ role +"/manage/invoice/detail/create"; 
      if(detailInvoiceId > 0){
        postUrl = "<?php echo site_url()?>"+ role +"/manage/invoice/detail/update/" + detailInvoiceId; 
      }

      $.post(postUrl, data ).then(res => {
          myToast('Data Saved !');
          $('#detailModal').modal('toggle');
          getListInvoice();
          getDetail(invoice_id, invoice_no);

          
      }).fail(xhr => {
          const res = JSON.parse(xhr.responseText);
          alert(res.message)
      });
    });

    $('#addInvoiceModal .validate-form').on('submit',function(e){
      e.preventDefault();
      
      const data = {
          invoice_date: $('#addInvoiceModal input[name="invoice_date"]').val(),
          item_name: $('#addInvoiceModal input[name="item_name"]').val(),
          price: $('#addInvoiceModal input[name="price"]').val(),
          qty: $('#addInvoiceModal input[name="qty"]').val(),
      }

      const invoiceId = $('#addInvoiceModal input[name="id"]').val();
      let postUrl = "<?php echo site_url()?>"+ role +"/manage/invoice/create"; 
      if(invoiceId > 0){
        postUrl = "<?php echo site_url()?>"+ role +"/manage/invoice/update/" + invoiceId;
        delete data.item_name;
        delete data.price;
        delete data.qty;
      }

      $.post(postUrl, data ).then(res => {
          myToast('Data Saved !');
          $('#addInvoiceModal').modal('toggle');
          getListInvoice();
      }).fail(xhr => {
          const res = JSON.parse(xhr.responseText);
          alert(res.message)
      });
    });

  });
  

    showAddDetailModal = (row) => {
      if(Object.keys(currentInvoice).length == 0) return myToast('Please select 1 row', 'error');

      $('#detailModal').modal('toggle');
      const data = row;
      if(data){
        $('#detailModal input[name="id"]').val(data.id);
        $('#detailModal input[name="invoice_date"]').val(data.invoice_date);
        $('#detailModal input[name="invoice_no"]').val(data.invoice_no);
        $('#detailModal input[name="item_name"]').val(data.item_name);
        $('#detailModal input[name="qty"]').val(data.qty);
        $('#detailModal input[name="price"]').val(data.price);
        $('#detailModal .modal-title').text('Edit Detail Invoice: ' + data.id);
        $('#detailModal .btn-submit').text('Edit');
        return;
      }

      $('#detailModal input[name="invoice_date"]').val(currentInvoice.invoice_date);
      $('#detailModal input[name="invoice_no"]').val(currentInvoice.invoice_no);
      $('#detailModal input[name="id"]').val(0);
      $('#detailModal input[name="item_name"]').val('');
      $('#detailModal input[name="qty"]').val(0);
      $('#detailModal input[name="price"]').val(0);
      $('#detailModal .modal-title').text('Add Detail Invoice');
      $('#detailModal .btn-submit').text('Add');
    }

    showAddInvoiceModal = () => {
      $('#addInvoiceModal').modal('toggle');
      $('#addInvoiceModal .modal-title').text('Create Invoice');
      $('#addInvoiceModal .btn-submit').text('Create');
    }

    deleteDetail = (id, invoice_id, invoice_no) => {
      
      $.post("<?php echo site_url()?>"+ role +"/manage/invoice/detail/delete/" + id).then(res => {
          
          myToast('Data Deleted !');
          getListInvoice();
          getDetail(invoice_id, invoice_no);
          
      }).fail(xhr => {
          const res = JSON.parse(xhr.responseText);
          alert(res.message)
      });
    }

    deleteInvoice = (id) => {
      
      $.post("<?php echo site_url()?>"+ role +"/manage/invoice/delete/" + id).then(res => {
          
          myToast('Data Deleted !');
          getListInvoice();
          currentInvoice = {};
          getDetail(id, "");
          
      }).fail(xhr => {
          const res = JSON.parse(xhr.responseText);
          alert(res.message)
      });
    }

    confirmInvoice = (id) => {
      Swal.fire({
        title: '<p style="font-size: 24px;">Are you sure want to confirm this invoice ? you cant change detail anymore</p>',
        showCancelButton: true,
        confirmButtonText: `Confirm`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          $.post("<?php echo site_url()?>"+ role +"/manage/invoice/confirm/" + id).then(res => {
          
            getListInvoice();
            getDetail(currentInvoice.id, currentInvoice.invoice_no)
        
          }).fail(xhr => {
              const res = JSON.parse(xhr.responseText);
              alert(res.message)
          });
        }
      })
    }
      

    showModal = (id) => {
      $.get("<?php echo site_url()?>manage/users/" + id).then(res => {
        const data = JSON.parse(res);

        $('#editModal').modal({ show: true });
        $('input[name="id"]').val(data.id);
        $('input[name="email"]').val(data.email);
        $('input[name="username"]').val(data.username);
      }).fail( xhr => {
        const res = JSON.parse(xhr.responseText);
        $.toast({
            // heading: "Failed Register",
            text: "<span class='my-2' style='font-size: 14px;'><b>"+ res.message || 'Something went wrong' +"</b>", 
            icon: 'error',
            showHideTransition: 'slide',
            allowToastClose: true,
            hideAfter: 3000,
            stack: false,
            position: 'top-center', 
            textAlign: 'left',
            loader: false,
        });
      })
    }

    
    let tableInvoice;
    const getListInvoice = () => {
        $.get("<?php echo site_url()?>"+ role +"/manage/invoice/getAllInvoices").then(res => {
        
        tableInvoice = $('#example1').DataTable({
            destroy: true,
            responsive: true, lengthChange: false, autoWidth: false,
            buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            data: JSON.parse(res),
            columns: [
                { data: null,"sortable": false, 
                  render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                  }
                },
                { data: null,"sortable": false, 
                  render: function (data, type, row, meta) {
                    if(role=='admin' || row.is_approve == true) return '';

                    let btn = '';
                    btn += '<button type="button" class="btn btn-success px-2 py-1 ml-1" style="font-size: 16px;" onclick="confirmInvoice('+ row.id +')"><i class="fa fa-check nav-icon"></i> Confirm</button>';
                    btn += '<button type="button" class="btn btn-danger px-2 py-1 ml-1" style="font-size: 16px;" onclick="deleteInvoice('+ row.id +')"><i class="fa fa-trash nav-icon"></i></button>';
                    
                    return btn;
                  }
                },
                { data: 'invoice_no' },
                { data: 'invoice_date' },
                { data: 'total' },
                { data: 'is_approve',
                  render: function(data, type, row, meta) {
                    const checkbox = (data == 1 ? '<i class="fa fa-check nav-icon"></i>': '')
                    return '<div class="form-check">'+ checkbox +'</div>';
                  } },
            ]
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

        $('#example1 tbody').on('click', 'tr', function () {
          $('#example1 tbody tr.selected').removeClass('selected');
          $(this).toggleClass('selected');
          
          const table = $('#example1').DataTable();
          currentInvoice = table.rows('.selected').data()[0]; 
          getDetail(currentInvoice.id, currentInvoice.invoice_no)
        });
      }).fail(xhr => {
        const res = JSON.parse(xhr.responseText);
        $.toast({
            // heading: "Failed Register",
            text: "<span class='my-2' style='font-size: 14px;'><b>"+ res.message || 'Something went wrong' +"</b>", 
            icon: 'error',
            showHideTransition: 'slide',
            allowToastClose: true,
            hideAfter: 3000,
            stack: false,
            position: 'top-center', 
            textAlign: 'left',
            loader: false,
        });
      });
    }
    

    const getDetail = (id, invoice_no) => {
      $('.invoice_no').text(invoice_no);
      if(currentInvoice.is_approve != true) $('.button-add-detail').show();
      
      $.get("<?php echo site_url()?>"+ role +"/manage/invoice/detail/"+ id).then(res => {
        
        $('#example2').DataTable({
            destroy: true,
            responsive: true, lengthChange: false, autoWidth: false,
            buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            data: JSON.parse(res),
            columns: [
                { data: null,"sortable": false, 
                  render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                  }
                },
                { data: null,"sortable": false, 
                  render: function (data, type, row, meta) {
                    if(role=='admin' || row.is_approve == true) return '';

                    let btn = '';
                    btn += '<button type="button" class="btn btn-primary pl-2 pr-1 py-1" style="font-size: 16px;" onclick="showAddDetailModal('+ JSON.stringify(row).replace(/"/g, '&quot;').replace(/'/g, '&apos;') +')"><i class="far fa-edit nav-icon"></i></button>';
                    btn += '<button type="button" class="btn btn-danger px-2 py-1 ml-1" style="font-size: 16px;" onclick="deleteDetail('+ row.id +','+ row.invoice_id +', \''+ row.invoice_no + '\')"><i class="fa fa-trash nav-icon"></i></button>';
                    return btn;
                  }
                },
                { data: 'invoice_no' },
                { data: 'invoice_date' },
                { data: 'vendor_name' },
                { data: 'item_name' },
                { data: 'price' },
                { data: 'qty' },
                { data: 'total' },
            ]
        }).buttons().container().appendTo('#example2_wrapper .col-md-6:eq(0)');
      }).fail(xhr => {
        const res = JSON.parse(xhr.responseText);
        $.toast({
            // heading: "Failed Register",
            text: "<span class='my-2' style='font-size: 14px;'><b>"+ res.message || 'Something went wrong' +"</b>", 
            icon: 'error',
            showHideTransition: 'slide',
            allowToastClose: true,
            hideAfter: 3000,
            stack: false,
            position: 'top-center', 
            textAlign: 'left',
            loader: false,
        });
      });
    }
</script>
