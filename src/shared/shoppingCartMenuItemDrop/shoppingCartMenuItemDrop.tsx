import {
  MenuItem,
  Grid,
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import MinimizeIcon from "@mui/icons-material/Minimize";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import product1 from "../../../assets/images/product1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import { useState } from "react";

interface IShoppingCartProductProps {
  item: ShoppingCartItemType;
}

const ShoppingCartMenuItemDrop: React.FC<IShoppingCartProductProps> = ({
  item,
}) => {
  const [amount, setAmount] = useState<number>(item.amout);
  return (
    <>
    <MenuItem sx={{ mb:"5px"}} >
      <Grid xs={4}>
        <Grid container>
          <img
            src={item.product.fields.image[0].url}
            width="70px"
            height="80px"
          />
        </Grid>
        {/* <Grid
          sx={{
            height: "20px",
            mx: "auto",
            mt: "20px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "35px",
              boxShadow: "1px 1px 1px black",
              bgcolor: "yellow",
              borderRadius: "10px",
              justifyContent: "space-between",
            }}
          >
            <IconButton aria-label="delete">
              <AddIcon
                fontSize="small"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              />
            </IconButton>
            <Typography mt="7px">{amount}</Typography>
            <IconButton aria-label="delete">
              <MinimizeIcon
                fontSize="large"
                sx={{ paddingBottom: "12px" }}
                onClick={() => {
                  if (amount > 1) {
                    setAmount(amount - 1);
                  }
                }}
              />
            </IconButton>
          </Box>
        </Grid> */}
      </Grid>
      <Grid xs={8}>
        <List>
          <ListItem>
            <Grid>
              <Typography
                sx={{
                  color: "black",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  textAlign: "start",
                }}
                variant="body2"
              >
                {item.product.fields.name}
              </Typography>
            </Grid>
          </ListItem>
          <ListItem>
            <CircleIcon sx={{ color: "yellow" }} fontSize="small" />
            <Typography
              sx={{ display: "inline", color: "black", mr: "5px" }}
              variant="caption"
            >
              زرد
            </Typography>
          </ListItem>
          <ListItem>
            <GppGoodIcon fontSize="small" />
            <Typography
              sx={{ display: "inline", mr: "5px", color: "black" }}
              variant="caption"
            >
              گارانتی 18 ماهه
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent:"end"}}>
            <Typography variant="subtitle1" mr="5px">
              {item.product.fields.priceWithDiscount}
            </Typography>
            <Typography variant="caption" mr="5px">
              تومان
            </Typography>
          </ListItem>
        </List>
      </Grid>
      
    </MenuItem>
    <Divider />
</>
  );
};

export default ShoppingCartMenuItemDrop;