
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>DataTables</h1>
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
                <h3 class="card-title">DataTable with minimal features & hover style</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Created At</th>
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
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Users</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form class="validate-form" method="POST">
          <div class="modal-body px-4">
            
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">User ID</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control-plaintext mx-2" id="userId" name="id">
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control mx-2" id="staticEmail" name="email" value="email@example.com">
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control mx-2" id="username" name="username" value="achmad1234">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control mx-2" id="inputPassword" name="password" placeholder="Password">
                </div>
              </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
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
  $(function () {
    $('.validate-form').on('submit',function(e){
      e.preventDefault();
      
      const id = $('input[name="id"]').val();
      const password = $('input[name="password"]').val();
      const data = {
          email: $('input[name="email"]').val(),
          username: $('input[name="username"]').val(),
          password: SparkMD5.hash(password),
      }
      if(password == '') delete data['password'];

      $.post("<?php echo site_url()?>manage/users/update/" + id, data ).then(res => {
          $.toast({
              text: "<span class='my-2' style='font-size: 18px;'><b>Success update data !</b></span>", 
              icon: 'success',
              showHideTransition: 'slide',
              allowToastClose: true,
              hideAfter: false,
              stack: false,
              position: 'top-center', 
              textAlign: 'left',
              loader: false,
          });
          $('#editModal').modal({ show: false });
      }).fail(xhr => {
          const res = JSON.parse(xhr.responseText);
          alert(res.message)
          $.toast({
              // heading: "Failed Register",
              text: "<span class='my-2' style='font-size: 14px;'><b>"+ res.message +"</b>", 
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
    });

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

    $.get("<?php echo site_url()?>manage/users/getAllUsers").then(res => {
      
      $('#example1').DataTable({
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
                  let btn = '';
                  btn += '<button type="button" class="btn btn-primary pl-2 pr-1 py-1" style="font-size: 16px;" onclick="showModal('+ row.id +')"><i class="far fa-edit nav-icon"></i></button>';
                  btn += '<button type="button" class="btn btn-danger px-2 py-1 ml-1" style="font-size: 16px;"><i class="fa fa-trash nav-icon"></i></button>';
                  return btn;
                }
              },
              { data: 'email' },
              { data: 'username' },
              { data: 'created_at' }
          ]
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
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
    
    
  });
</script>
