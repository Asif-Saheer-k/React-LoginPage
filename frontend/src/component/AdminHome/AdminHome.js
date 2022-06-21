import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function AdminHome() {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setsearch] = useState("");
  const [filterValue, setfilterValue] = useState([]);

  useEffect(() => {
    const userInfo=localStorage.getItem("adminInfo")
    if(!userInfo){
      navigate("/admin");
    }

    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.get("/adminHome", config);
        console.log("bfvbvb", data);
        setuserDetails(data);
        setfilterValue(data);
      } catch (error) {
        throw new error(error.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    const result = userDetails.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    console.log(result, "hshsh");
    setfilterValue(result);
  }, [search]);

  const deleteuser = async (userId) => {
  

   
    if (window.confirm(`Sure to Delete?`)) {
        var index=0
        filterValue.map((obj) => {
            console.log("fsdf", obj);
            if (obj._id == userId) {
               index = filterValue.indexOf(obj);      
            }
          });
        const test = [...filterValue];
    
        test.splice(index, 1);
        setfilterValue(test);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        await axios.delete("/adminHome/deleteuser", {
          params: {
            id: userId,
          },
          config,
        });
      } catch (error) {
        throw new error(error.response.data.message);
      }
    }
  };

  const editHandler = async (userId) => {
    try {
      navigate(`/adminHome/edituser/${userId}`);
    } catch (error) {
      throw new error(error.response.data.message);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <Button
          variant="outlined"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => {
            editHandler(row._id);
          }}
        >
          Edit
        </Button>
      ),
    },
    {
      name: "",
      cell: (row) => (
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => deleteuser(row._id)}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "150px" }}
      >
        <Card style={{ height: "100%", width: "80%" }}>
          <DataTable
            title={"User Details"}
            columns={columns}
            data={filterValue}
            pagination
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Serch here..."
                className="w-25 form-control"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
            }
          />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default AdminHome;
