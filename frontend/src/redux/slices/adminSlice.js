import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  allStudents: [],
  allInstructors: [],
};

export const getAllStudents = createAsyncThunk(
  "/admin/all-students",
  async () => {
    try {
      const response = axiosInstance.get(`/admin/all-students`);
      toast.promise(response, {
        loading: "Wait! Loading Data",
        success: (data) => {
          return data?.data?.msg;
        },
        error: "Failed to load Data",
      });
      // console.log(await response)
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      throw error.message; // Handle and return a specific error message
    }
  }
);

export const getAllInstructors = createAsyncThunk(
  "/admin/all-instructor",
  async () => {
    try {
      const response = axiosInstance.get(`/admin/all-instructor`);
      toast.promise(response, {
        loading: "Wait! Loading Data",
        success: (data) => {
          return data?.data?.msg;
        },
        error: "Failed to load Data",
      });
      // console.log(await response)
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      throw error.message; // Handle and return a specific error message
    }
  }
);

export const approveInstructor = createAsyncThunk(
  "/admin/approve-instructor/",
  async (id) => {
    try {
      const response = axiosInstance.get(`/admin/approve-instructor/${id}`);
      toast.promise(response, {
        loading: "Wait! Loading...",
        success: (data) => {
          return data?.data?.msg;
        },
        error: "Failed to Approve",
      });
      // console.log(await response)
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      throw error.message; // Handle and return a specific error message
    }
  }
);

export const unapproveInstructor = createAsyncThunk(
  "/admin/unapprove-instructor/",
  async (id) => {
    try {
      const response = axiosInstance.get(`/admin/unapprove-instructor/${id}`);
      toast.promise(response, {
        loading: "Wait! Loading...",
        success: (data) => {
          return data?.data?.msg;
        },
        error: "Failed to UnApprove",
      });
      // console.log(await response)
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      throw error.message; // Handle and return a specific error message
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "/admin/delete-student",
  async (id) => {
    try {
      const response = axiosInstance.get(`/admin/delete-student/${id}`);
      toast.promise(response, {
        loading: "Wait! Deleting...",
        success: (data) => {
          return data?.data?.msg;
        },
        error: "Failed to Delete",
      });
      // console.log(await response)
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      throw error.message; // Handle and return a specific error message
    }
  }
);

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.allStudents = action.payload.allStudents;
      })
      .addCase(getAllInstructors.fulfilled, (state, action) => {
        state.allInstructors = action.payload.allInstructors;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.allStudents = action.payload.allStudents;
      })
  },
});

// export const {} = adminSlice.actions;

export default adminSlice.reducer;