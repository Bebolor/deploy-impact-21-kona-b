import pandas as pd
import json
import ast

JSON_PATH = "json/"
ORGANISATION_DISPLAY = "organisation_display.json"


def get_all():
    '''
    :return: dictionary of all organisations in db
    '''
    filename = JSON_PATH + ORGANISATION_DISPLAY
    df = pd.read_json(filename, lines=True)
    df = df.astype(str)
    for i in range(len(df['categories'])):
        df['categories'][i] = ast.literal_eval(df['categories'][i])
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res


def get_one(org_id):
    '''

    :param org_id: organisation id
    :return: get info of a single organisation corresponding to organisation id
    '''
    filename = JSON_PATH + ORGANISATION_DISPLAY
    df = pd.read_json(filename, lines=True)
    df = df.astype(str)
    for i in range(len(df['categories'])):
        df['categories'][i] = ast.literal_eval(df['categories'][i])
    df = df.loc[df['id'] == org_id]
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res


def add(data):
    '''
    :param data: dictionary of the new organisation info
    :return: adds organisation to the db file
    '''
    filename = JSON_PATH + ORGANISATION_DISPLAY
    keys = []
    values = []
    for key, value in data.items():
        keys.append(key)
        values.append(value)

    df = pd.read_json(filename, lines=True)
    df = df.astype(str)
    df2 = pd.DataFrame([values],
                       columns=keys)
    df = pd.concat([df, df2]).reset_index(drop=True)
    df.to_json(filename, orient='records', lines=True)


def delete(org_id):
    '''

    :param org_id: organisation id
    :return: remove organisation corresponding to the organisation id from db
    '''
    filename = JSON_PATH + ORGANISATION_DISPLAY
    df = pd.read_json(filename, lines=True)
    df = df.astype(str)
    df = df[df.id != org_id]
    df.to_json(filename, orient='records', lines=True)


def update_values(org_id, data):
    '''

    :param org_id: organisation id
    :param data: dictionary of {column name}:{value to put}
    :return:
    '''
    filename = JSON_PATH + ORGANISATION_DISPLAY
    df = pd.read_json(filename, lines=True)
    df = df.astype(str)
    for key, value in data.items():
        df.loc[df.id == org_id, key] = value
    df.to_json(filename, orient='records', lines=True)
