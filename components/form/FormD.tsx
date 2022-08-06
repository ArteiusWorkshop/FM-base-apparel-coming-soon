import { TextField, Button, Box, InputAdornment } from "@mui/material";
import { useFormControls } from ".";

const inputFieldValues = [
  {
    name: "email",
    label: "Email adress",
    id: "my-email",
  },
];

export const FormD = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <Box
      paddingTop={3}
      paddingBottom={5}
      display="flex"
      className="TextField-border-radius"
    >
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              fullWidth
              key={index}
              onChange={handleInputValue}
              onBlur={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue.name]}
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {errors[inputFieldValue.name] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <circle cx="12" cy="12" r="12" fill="#F96464" />
                          <path
                            fill="#FFF"
                            fillRule="nonzero"
                            d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
                          />
                        </g>
                      </svg>
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
          );
        })}
      </form>

      <Box position="fixed">
        <Button
          variant="contained"
          type="submit"
          disabled={!formIsValid()}
          className={!formIsValid() ? "buttons" : "butons"}
          style={{
            borderRadius: 50,
            width: "75px",
            height: "55px",
            left: 375,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};
