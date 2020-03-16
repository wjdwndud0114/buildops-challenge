import React from "react";
import {
  Dialog,
  useTheme,
  useMediaQuery,
  Slide,
  DialogContent,
  Grid,
  DialogContentText
} from "@material-ui/core";
import DialogTitleWithClose from "../../../Common/DialogTitleWithClose";
import AddressTable from "./AddressTable/AddressTable";
import EmployeeSkillList from "./EmployeeSkillList/EmployeeSkillList";

const DialogTransition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function EmployeeDetail({ open, handleClose, data }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return data != null ? (
    <Dialog
      fullWidth
      TransitionComponent={DialogTransition}
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        style: { backgroundColor: theme.palette.background.default }
      }}
    >
      <DialogTitleWithClose
        children={`${data.firstname} ${data.lastname}`}
        onClose={handleClose}
      />
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AddressTable employeeId={data.id} data={data.addresses.items} />
          </Grid>
          <Grid item xs={12} md={4}>
            <EmployeeSkillList
              employeeId={data.id}
              data={data.skills.items.map(s => s.skill.id)}
            />
          </Grid>
        </Grid>
        <DialogContentText />
      </DialogContent>
    </Dialog>
  ) : null;
}
