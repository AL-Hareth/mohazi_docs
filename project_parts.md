# Mohazi Project parts


# 1. Mohaze file extension:

File extension for mohazi is .mhz (if you see .vis this is for an older version, ignore it and replace it with .mhz)

Here is a simple example of an input:

File name: login.mhz

```yaml
	login:
	  username:
	    type: string
	    required: true
	    defaultError: 'Invalid username.'
	    rules:
	        min: { value: 3, error: 'Username must be at least 3 characters long.' }
	        maxLength: 20 # if there is no error, you also need to format it
	  password:
	    type: string
	    required: true
	    rules:
	        minLength: 8
	        error: 'Password must be at least 8 characters long.' # this error is reffered to the previous rule
	        pattern:
	          value: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
	          error: 'Password must contain at least one letter and one number.'
	  id:
	    type: string
	    defaultError: 'Invalid ID.'
	    rules:
	        pattern:
	          value: "^[0-9]{24}$"
	          error: 'ID must be a valid number.'
	    transform:
	        cast: "number"
	    rules:
	        min: { value: 1, error: 'ID must be at least 1.' }
	        max: { value: 999999999999999999999999, error: 'ID exceeds maximum allowed value.' }
	
register:
  email:
    type: string
    required: true
    defaultError: 'Invalid email address.'
    rules:
        pattern:
          value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
          error: 'Email must be a valid email format.'
  username:
    type: string
    required: true
    defaultError: 'Invalid username.'
    rules:
        minLength: { value: 3, error: 'Username must be at least 3 characters long.' }
        maxLength: { value: 20, error: 'Username cannot exceed 20 characters.' }
  password:
    type: string
    required: true
    defaultError: 'Invalid password.'
    rules:
        minLength: 8
        error: 'Password must be at least 8 characters long.' # this error is reffered to the previous rule
        pattern:
          value: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
          error: 'Password must contain at least one letter and one number.'
  confirm_password:
    type: string
    required: true
    defaultError: 'Invalid confirmation password.'
    rules:
        matchesField:
          field: password
          error: 'Confirmation password must match the password.'
```

# 2. Compiler:

Here is the sample output to typescript:

filename: login.ts

```tsx
// T and TT will have the same keys, but may have different value types
// if success is true, data will contain the TT typed values
// else data will have T type the orginal input values
type ValidationResult<T, TT> = {
    success: true;
    errors: Array<{ path: string; message: string }>;
    data: TT
} | {
    success: false;
    errors: Array<{ path: string; message: string }>;
    data: T
};

type LoginData = {
    username: string;
    password: string;
    id?: string;
};

type returnLoginData = {
    username: string;
    password: string;
    id?: number;
}

export const validateLogin = (data: LoginData): ValidationResult<LoginData, returnLoginData> => {
    let result: ValidationResult<LoginData, returnLoginData> = {
        success: false,
        errors: [],
        data
    };

    const successData: any = {};
    let flag = true;
    // Since it's a required field, we check for presence and type
    if (!data.username || typeof data.username !== 'string') { 
        // errors.username = 'Username is required.';
        result.errors.push({
            "path": "login.username",
            "message": "Invalid username." // default error message
        });
        flag = false;
    } else {
        if (data.username.length < 3) {
            // errors.username = 'Username must be at least 3 characters long.';
            result.errors.push({
                "path": "login.username",
                "message": "Username must be at least 3 characters long."
            });
            flag = false;
        } 
        if (data.username.length > 20) {
            // errors.username = 'Username cannot exceed 20 characters.';
            // Since there is no specific error message, we used the default one.
            result.errors.push({
                "path": "login.username",
                "message": "Invalid username."
            });
            flag = false;
        }
    } 

    if(flag) {
        successData.username = data.username;
    }

    flag = true;
    if (!data.password || typeof data.password !== 'string') {
        // errors.password = 'Password is required.';
        result.errors.push({
            "path": "login.password",
            "message": "Invalid password."
        });
    } else {
        if (data.password.length < 8) {
            // errors.password = 'Password must be at least 8 characters long.';
            result.errors.push({
                "path": "login.password",
                "message": "Password must be at least 8 characters long."
            });
            flag = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/.test(data.password)) {
            // errors.password = 'Password must contain at least one letter and one number.';
            result.errors.push({
                "path": "login.password",
                "message": "Password must contain at least one letter and one number."
            });
            flag = false;
        }
    }

    if(flag) {
        successData.password = data.password;
    }

    flag = true;

    if("id" in data) {
        if(typeof data.id !== 'string') {
            result.errors.push({
                "path": "login.id",
                "message": "Invalid ID."
            });
            flag = false;
        } else {
            if(!/^[0-9]{24}$/.test(data.id)) {
                result.errors.push({
                    "path": "login.id",
                    "message": "ID must be a valid number."
                });
                flag = false;
            }
            if(flag){
                const id = parseInt(data.id, 10);
                if(isNaN(id)) {
                    result.errors.push({
                        "path": "login.id",
                        "message": "ID must be a valid number."
                    });
                    flag = false;
                }else {
                    if(id < 1) {
                        result.errors.push({
                            "path": "login.id",
                            "message": "ID must be at least 1."
                        });
                        flag = false;
                    }
                    if(id > 999999999999999999999999) {
                        result.errors.push({
                            "path": "login.id",
                            "message": "ID exceeds maximum allowed value."
                        });
                        flag = false;
                    }

                    if(flag) {
                        successData.id = id;
                    }
                }
            }
        }
    }

    if(result.errors.length === 0) {
        result = {
            success: true,
            errors: [],
            data: successData
        };
    }

    return result;
}

```

this config file must exist where you run the compiler and named 'mhz.config.json', otherwise it should be explicitly specified.

```json
// format is not final
{
  "input": "./mhz",
  "languages":{
    "javascript": {
      "enabled": true,
      "output": "./frontend/lib/mhz"
    },
    "rust": {
      "enabled": true,
      "output": "./backend/lib/mhz"
    },
  }
}
```

After processing the file, went to mhz folder loop through the files compile each one and output them to specified folder.

### Non mentioned parts of the compiler:

- **We will not just return the errors from our compiled functions(like in the example above),** we will have a format of returning something like this:
    
    ```jsx
    {
      "success": true,
      "errors": [
        {
          path: "login.username",
          error: "Username too short"
        },
        ...
      ],
      "data": {
        "username": "am",
        "password": "ss"
      }
    }
    ```
    
- There are more than rules section, we also have transform section which will have attributes like trim, or convert the type to another type or reduce image size.
- We also need to handle arrays
- We can also make some rules only valid on servers

## Rules mapping

Every rule needs to be mapped 1-to-1 in the other languages

## Type export

We need to export types to languages. For example in typescript we will use type, other languages like c++ or c# may use a class

