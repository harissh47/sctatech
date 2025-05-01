import os
import pandas as pd
def append_data(username, phone, email, message, excel_path='people.xlsx'):
    columns = ['Username', 'Phone', 'Email', 'Message']
    new_row = { 'Username': username, 'Phone': phone, 'Email': email, 'Message': message} 

    if not os.path.exists(excel_path):
        df = pd.read_excel(excel_path)
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
    else:
        df = pd.DataFrame([new_row],columns=columns)
    df.to_excel(excel_path, index=False)