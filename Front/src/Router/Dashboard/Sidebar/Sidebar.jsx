import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Collapse,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { menuItems } from '../../menu-items';

const DRAWER_WIDTH = 260;

const Sidebar = ({ open }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const handleToggleExpand = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const renderMenuItem = (item, level = 0) => {
    const isExpanded = expandedItems[item.id];

    if (item.type === 'group') {
      return (
        <Box key={item.id}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              px: 2,
              py: 1,
              fontWeight: 'bold',
              color: 'text.secondary',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              mt: level === 0 ? 1 : 0,
            }}
          >
            {item.title}
          </Typography>
          <List sx={{ py: 0 }}>
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </List>
        </Box>
      );
    }

    if (item.type === 'collapse') {
      return (
        <Box key={item.id}>
          <ListItem
            button
            onClick={() => handleToggleExpand(item.id)}
            sx={{
              pl: 2 + level * 2,
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.title} />
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        </Box>
      );
    }

    if (item.type === 'item') {
      return (
        <ListItem
          button
          component={RouterLink}
          to={item.url || '#'}
          key={item.id}
          sx={{
            pl: 2 + level * 2,
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          {item.icon && (
            <ListItemIcon sx={{ minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText primary={item.title} />
        </ListItem>
      );
    }

    return null;
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Main Menu */}
      <List sx={{ flex: 1, py: 1 }}>
        {menuItems.items?.map((item) => renderMenuItem(item, 0))}
      </List>

      {/* Footer Info */}
      <Box sx={{ p: 2, bgcolor: '#f5f5f5', color: 'text.secondary' }}>
        <Typography variant="caption">v1.0.0</Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: open ? DRAWER_WIDTH : 0,
        flexShrink: 0,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          marginTop: '64px',
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
