import pandas as pd
import numpy as np
def create_dataframe():
    # Create a DataFrame with 100 rows and 5 columns
    df = pd.DataFrame(np.random.rand(100, 5), columns=list('ABCDE'))
    
    # Add a new column 'F' with random integers between 1 and 10
    df['F'] = np.random.randint(1, 11, size=(100,))
    
    df